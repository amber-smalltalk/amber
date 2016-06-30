###The handling of verbose flag by grunt-amberc.js

I created four test grunt files. Each compile the amber_test_runner. 

1. no_verbose.js does not set the verbose flag.
2. task_level_test.js sets the verbose flag at the task level. 
3. target_level_test.js sets the verbose flag at the target level.
4. property_level_test.js sets the verbose flag at the property level.

See below where I define each level.

    {
		amberc: {
			options: {
				verbose: true // This is the task level
			},
			aTarget: {
				options: {
					verbose: true  // This is the target level
				}
				verbose: true // This is the property level
			}
		}
    }


These testcases are installed in AMBER_DIR/test/testcases. Below are the tests I ran and my description of the results.

You run each file by making it the Gruntfile and test the output. You test the output by eye. Did the compiler run verbose? Did grunt run verbose.

I am testing against amber 931b270849b09011b0f5a31bcd1e797853a7513f

### Result of my tests

1.

    grunt --gruntfile no_verbose.js
This results in a non verbose execution of the compilation. This is ok.

2.

    grunt -v --gruntfile no_verbose.js
This results in a verbose execution of the compilation and a verbose run of grunt. This is ok.

3.

    grunt --gruntfile property_level_test.js
This results in a non verbose execution of the compilation. This is **not** ok.

4.

    grunt -v --gruntfile property_level_test.js
This results in a verbose execution of the compilation and a verbose run of grunt. This is ok.

5.

    grunt --gruntfile task_level_test.js
This results in a verbose run of the compilation. This is Ok

6.

    grunt -v --gruntfile task_level_test.js
This results in a verbose execution of the compilation and a verbose run of grunt. This is ok.

7.

    grunt --gruntile target_level_test.js
This results in a verbose run of the compilation. This is Ok

8.

    grunt -v --gruntile target_level_test.js
This results in a verbose execution of the compilation and a verbose run of grunt. This is ok.
   
---
My comments

A **failure in cases 3** where you set the verbose flag at the property level. Case 5 is odd because the compiler is run verbose but grunt is run non verbosely.

Setting the -v command line flag always runs the compiler