<script>
    function fn()
    {
        var x = document.getElementById("mobile");
        var y = x.value;
        var idbits = document.getElementById("bitsid");
        var z = idbits.value;
        let num=0;
        var output1;
        var output2;
        var output3;
        if( y.length!=10)
            {
                output1 = "Contact not valid";
                document.getElementById("ans1").innerHTML = output1;
                num++;
            }
        if( z.length!=13)
            {
                output2 = "Enter correct BITS ID";
                document.getElementById("ans2").innerHTML = output2;
                num++;
            }
        if(num==0)
            {
                var eventname = document.getElementById("event").value;
                var name = document.getElementById("name").value;
                var eventdep = document.getElementById("devent").value;
                var date = document.getElementById("edate").value;
                
                var result = " Event name : " + eventname + "<br/>" + 
                    " Name : " + name + "<br/>" +
                    " Department organizing : " + eventdep + "<br/>" +
                    " BITS ID : " + z + "<br/>" +
                    " Mobile No : " + y + "<br/>" +
                    " Date : " + date + "<br/>" ;
                
                document.getElementById("ans3").innerHTML = result;    
            }
        
            
    
    }
            </script>

 </body>
    
</html>