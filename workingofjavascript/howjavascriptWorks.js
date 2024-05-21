// important for interview------------>

//javascript has single threded  execution
// In browser's globel object  "this" value  is windows.

/*
<-------------------JavaScript Execution Context---------------------------->

when we give the code to javascript then-->

1. "Globel Execution context" is created  and value refered  to "this" keyword.

2.Functional Execution context.

3.Eval Execution context.


{ 
                
                1."Memory creation phase" (memory allocation)

                2."Execution phase"
}

*/


/*
let val1=10
let val2=5

function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(3,4)
*/


/*
<-------------------How code is executed-------------->

FIRST CYCLE======>
{
1.global execution /enviroment  allocated to "this" 

2.memory creation phase--->
     initially----->
           val1=undefined
           val2=undefined
           addNum-->defination
           result1=undefined
           result2=undefined

}

SECOND CYCLE=======>
// NOTE- In every function execution there are new "execution context" is created and "memory creation phase" and "execution phase" is also executed.
{
  3.  Execution Phase--->
       val1=10
       val2=5                  ______New Execution Contex_____
       addNum ----------->     |                              |
     result1=15                |      new Variable            |
      result1=7                |       enviroment             |
                               |          +                   |
                               |      Execution Thread        |
                               |                              |
                               |                              |
                               |                              |
                               |______________________________|
                                             ||
              -----------------------------------------------------
              |                                                   |
        Memory Phase                                      Execution Phase
        val1=undefined                                    num1=10
        val2=undefined                                    num2=5
        total=undefined                                   total=15
                                                ("total" returns in globel EC )


              after this all activity our new Execution context is deleted and value returns in the parent execution phase 

  for "result2"  all same thing is executed (happens).


}

*/



//<------------------------------Call-Stack--------------------------->

/*

It  is based on "LIFO" concept as like STACK data structure.

*/







                 