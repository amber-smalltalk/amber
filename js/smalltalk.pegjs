start = methodPattern

/*
 * expression pattern parsing
 */

expressionPattern = temps? statements*



/*
 * method pattern parsing
 */

methodPattern 
  = unaryPattern / binaryPattern / keywordPattern

unaryPattern
  = ws key:identifier ws body:methodBody ws
  {
      return smalltalk.methodNode({
	  selector: [key],
	  children: [body]
      });
  }

binaryPattern
  = ws key:binary separator param:identifier ws body:methodBody ws
  {
      return smalltalk.methodNode({
	  selector: [key], 
          params:    [smalltalk.valueNode({value: param})], 
	  children: [body]
      });
  }

keywordPattern
  = ws pairs:(keywordPair)+ ws body:methodBody ws
  {
      var keywords = [];
      var params = [];
      for(var i=0;i<pairs.length;i++){
          keywords.push(pairs[i].key);
      }
      for(var i=0;i<pairs.length;i++){
          params.push(pairs[i].arg);
      }
      return smalltalk.methodNode({
          selector: keywords, 
          params:   params, 
          children: [body]
      });
  }

methodBody
  = ws temps:temps? ws stats:statementList? ws
    {

        return smalltalk.sequenceNode({
            temps:    temps || [],
            children: stats || []
        });
    }


/*
 * Method parsing
 */


temps
  = "|" vars:(ws v:variable ws{return v})* "|" {return vars}

variable
  = value:identifier 
  {
      return smalltalk.variableNode({value: value});
  }

statementList
  = ret:ret [.]*
  {
      return [ret]
  }
  / stats:statements ws [.]+ ws ret:ret [.]*
  {
      var statements = stats;
      statements.push(ret);
      return statements
  }
  / stats:statements? [.]*
  {
      return stats
  }
  

statements
  = first:(ws stat:statement {return stat}) others:(ws "." ws stat:statement ws {return stat})*
  {
    var statements = [];
    var others = others || [];
    statements.push(first);
    for(var i=0; i<others.length;i++) {
        statements.push(others[i]);
    }
    return statements
  }

ret
  = ws "^" ws stat:statement
  {
      return smalltalk.returnNode({
          children: [stat]
      });
  }

statement
  = jsStatement / assignment / cascade / keywordSend / binarySend


jsStatement
  = [<] val:(("<<" {return "<"} / [^<])*) [>]
  {
	return smalltalk.jsStatementNode({source: source})
  }


assignment
  = ws left:reference ws ":=" ws right:statement ws
  {
      return smalltalk.assignmentNode({
          left:  left,
          right: right
      });
  }

cascade
  = ws send:(keywordSend / binarySend) messages:(ws ";" ws mess:message ws {return mess})+ 
  {
      var cascade = [];
      cascade.push(send);
      for(var i=0;i<messages.length;i++) {
          cascade.push(messages[i]);
      }
      return smalltalk.cascadeNode({
          receiver: send.receiver,
          children: cascade
      })
  }

unarySend
  = rec:operand ws tail:unaryTail?
  {
      if(tail) {
          smalltalk.setReceiver(tail,rec);
          return tail;
      }
      else {
          return rec
      }
  }

unaryTail
  = message:unaryTailMessage ws tail:unaryTail? ws
  {
      if(tail) {
          smalltalk.setReceiver(tail, message);
          return tail;
      }
      else {
          return message
      }
  }

unaryTailMessage
  = key:identifier ![:]
  {
      return smalltalk.sendNode({
          selector: [key]
      });
  }

keywordSend
  = rec:binarySend ws pairs:keywordPair+
  {
        var keywords = [];
        var args = [];
        for(var i=0;i<pairs.length;i++){
            keywords.push(pairs[i].key);
        }
        for(var i=0;i<pairs.length;i++){
            args.push(pairs[i].arg);
        }
        return smalltalk.sendNode({
            receiver: rec,
            selector: keywords,
            args: args
        });
  }

binarySend
  = rec:unarySend ws tail:binaryTail?
  {
      if(tail) {
          smalltalk.setReceiver(tail, rec);
          return tail;
      }       
      else {
          return rec
      }      
  }

binaryTail
  = ws rec:binaryTailMessage ws tail:binaryTail?
  {
	if(tail) {
		 smalltalk.setReceiver(tail, rec);
		 return tail
	}
	else {
	     return rec
	}
  }

binaryTailMessage
  = ws key:binary ws arg:unarySend
  {return smalltalk.sendNode({selector:[key], args: [arg]})}

send
  //= binarySend / unarySend / keywordSend
  = keywordSend / binarySend

message
  = binaryMessage / unaryMessage / keywordMessage

binaryMessage
  = key:binary ws arg:(unarySend / operand)
  {return smalltalk.sendNode({selector: [binary], args: [arg]});}

unaryMessage
  = key:identifier ![:]
  {return smalltalk.sendNode({selector: [key]});}

keywordMessage
  = pairs:keywordPair+ 
  {
      var selector = [];
      var args = [];
      for(var i=0;i<pairs.length;i++) {
          selector.push(pairs[i].key);
          args.push(pairs[i].arg);
      }
      return smalltalk.sendNode({selector: selector, args: args});
  }

operand
  = literal / reference / subexpression

subexpression
  = "(" stat:statement ")" {return stat}

block
  = ws "[" ws params:blockParams? ws temps:temps? ws stats:statementList? ws "]" ws
  {
      return smalltalk.blockNode({
          params: params, 
          children: [smalltalk.blockSequenceNode({temps: temps, children: stats})]
      });
  }

blockParams
  = params:((ws ":" ws param:identifier {return param})+) ws "|" ws
  {return params}


/*
 * common tokens
 */

separator = [ \t\v\f\u00A0\uFEFF\n\r\u2028\u2029]+
comments = (["][^"]*["])+
ws = (separator / comments)*
alphabetic =
identifier = first:[a-z] others:[a-zA-Z0-9]* {return first + others.join("")}

//literals
number = float / integer
float = neg:[-]?int:integer "." dec:integer {return parseFloat((neg+int+"."+dec), 10)}
integer = neg:[-]?digits:[0-9]+ {return (parseInt(neg+digits, 10))}
string = ['] val:(("''" {return "'"} / [^'])*) ['] {

        return '"' + val.join("").replace(/\"/ig, '\\"') + '"'
}

jsString = ['] val:(("''" {return "'"} / [^'])*) ['] {

        return val.join("")
}

char = "$" val:. {return val}
symbol = "#"val:[^ ] {return val}
literalArray = "#(" ws lits:(lit:literal ws {return lit})* ws ")" {return "[" + lits + "]"}
literal = number / literalArray /string / symbol / char /  block

keyword = first:identifier last:[:] {return first + last}
binary = bin:[+*/=><,@%~|&-]+ {return bin.join("")}

variable = v:identifier {return smalltalk.variableNode({value: v});}
global = first:[A-Z] others:[a-zA-Z0-9]* {return first + others.join("")}
classRef = ref:global {return smalltalk.classRefNode({value: ref})}
reference = variable / classRef
keywordPair = key:keyword ws arg:binarySend ws {return {key:key, arg: arg}}
