/* AST nodes for Jtalk */

smalltalk.node = function(spec) {
    var that      = {};
    that.nodes    = spec.nodes || [];
    that.accept   = function(visitor){visitor.visitNode(that)};
    return that;
}

smalltalk.methodNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
        visitor.visitMethodNode(that);
    };
    that.selector     = spec.selector || [];
    that.arguments    = spec.arguments   || [];
    return that;
}

smalltalk.sendNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
        visitor.visitSendNode(that);
    };
    that.selector     = spec.selector;
    that.receiver     = spec.receiver;
    that.arguments    = spec.arguments || [];
    return that;
}

smalltalk.cascadeNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
	return visitor.visitCascadeNode(that);
    };
    that.receiver = spec.receiver;
    return that;
}

smalltalk.sequenceNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
        visitor.visitSequenceNode(that);
    };
    that.asBlockSequenceNode = function() {
	return smalltalk.blockSequenceNode(that);
    };
    that.temps = spec.temps || [];
    return that;
}

smalltalk.blockSequenceNode = function(spec) {
    var that = smalltalk.sequenceNode(spec);
    that.accept = function(visitor) {
	visitor.compileBlockSequenceNode(that);
    }
    return that;
}

smalltalk.blockNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
        visitor.visitBlockNode(that);
    };
    that.params  = spec.params   || [];
    that.inlined = false;
    return that;
}

smalltalk.returnNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
        visitor.visitReturnNode(that);
    };
    that.isReturnNode = true;
    return that;
}

smalltalk.assignmentNode = function(spec) {
    var that = smalltalk.node(spec);
    var accept = function(visitor) {
        return visitor.visitAssignmentNode(that);
    };
    that.left             = spec.left;
    that.right            = spec.right;
    return that;
}

smalltalk.valueNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
	visitor.compileValueNode(that);
    }
    that.value       = spec.value;
    that.isValueNode = true;
    return that;
}

smalltalk.variableNode = function(spec) {
    var that = smalltalk.valueNode(spec);
    that.accept = function(visitor) {
        visitor.visitVariableNode(that);
    };
    that.isVariableNode = true;
    return that;
}

smalltalk.classReferenceNode = function(spec) {
    var that = smalltalk.variableNode(spec);
    that.accept = function(visitor) {
	return visitor.visitClassReferenceNode(that);
    };
    return that;
}

smalltalk.jsStatementNode = function(spec) {
    var that = smalltalk.node(spec);
    that.accept = function(visitor) {
	visitor.visitJsStatement(that);
    };

    that.source        = spec.source || "";
    return that;
}

/* Utility function used by the parser */

smalltalk.setReceiver = function(t, m) {
    if(!t.receiver) {
	t.receiver = m;
    } else {
	smalltalk.setReceiver(t.receiver, m);
    }
}