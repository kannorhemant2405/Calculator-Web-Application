 
  // Display value
  function dis(val) {
    document.getElementById("result").value += val;
  }

  // Evaluate expression
  function solve() {
    let x = document.getElementById("result").value;
    try {
      let y = eval(x); // Pure JS evaluation
      document.getElementById("result").value = y;
    } catch {
      document.getElementById("result").value = "Error";
    }
  }

  // Clear display
  function clr() {
    document.getElementById("result").value = "";
  }

  // Keyboard input
  document.getElementById("calcu").addEventListener("keydown", function(event) {
    const allowedKeys = "0123456789+-*/.";
    if(allowedKeys.includes(event.key)) {
      dis(event.key);
    } else if(event.key === "Enter") {
      solve();
    } else if(event.key === "Backspace") {
      let val = document.getElementById("result").value;
      document.getElementById("result").value = val.slice(0, -1);
    }
  });

 