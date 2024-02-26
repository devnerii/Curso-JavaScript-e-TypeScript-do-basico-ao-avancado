function getCalculate() {
  return {
    display: document.querySelector(".display"),
    start() {
      this.clickButtons();
      this.pressEnter();
    },
    pressEnter(){
        this.display.addEventListener("keyup", e => {
            if (e.code === "Enter") {
                this.result();
            }
        })
    },
    clickButtons() {
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;
          if (el.classList.contains("btn-num")) {
            this.btnToDisplay(el);
          } else if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          } else if (el.classList.contains("btn-del")) {
            this.clearOne();
          } else if (el.classList.contains("btn-eq")) {
            this.result();
          }
        }.bind(this)
      );
    },
    btnToDisplay(e) {
      let btnValue = e.innerHTML;
      this.display.value += btnValue;
    },
    clearDisplay() {
      this.display.value = "";
    },
    clearOne() {
      this.display.value = this.display.value.slice(0, -1);
    },
    result() {
      const result = this.display.value;
      try {
        const calculate = eval(result);
        if (!calculate) {
            alert("Invalid Input");
            return
          }
        this.display.value = calculate;
        return
      } catch (error) {
        alert("Invalid Input");
        return
      }
    },
  };
}

const calculator = getCalculate();
calculator.start();
