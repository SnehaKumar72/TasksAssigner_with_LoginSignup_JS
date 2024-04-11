hour = 0;
minutue = 0;
second = 0;
isrunning = false;

function changebutton() {

   if (!isrunning) {
      intervals = setInterval(() => {
         second++;
         if (second >= 60) {
            minutue++;
            second = 0;
         }
         if (minutue >= 60) {
            hour++;
            minutue = 0;
         }
         isrunning = true;
         var element = document.querySelector("button");
         element.textContent = "stop";
         let formattime = `${hour.toString().padStart(2, "0")}:${minutue.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
         document.querySelector("#stopwatch").innerText = formattime;

      }, 1000);
   }
   else {
      isrunning = false;
      var element = document.querySelector("button");
      element.textContent = "start";
      clearInterval(intervals);

   }
}

function resetbutton() {
   var element = document.querySelector("button");
   element.textContent = "start";
   hour = 0;
   minutue = 0;
   second = 0;
   isrunning = false;
   clearInterval(intervals);
   let formattime = `${hour.toString().padStart(2, "0")}:${minutue.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
   document.querySelector("#stopwatch").innerText = formattime;


}

