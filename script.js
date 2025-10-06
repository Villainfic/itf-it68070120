let count = 0;
let totalacc = 0;
let totalcash = 0;

function change() {
    const acc = document.getElementById("acc");
    const cash = document.getElementById("cash");
    const historyBox = document.getElementById("history");

    count++;
    // อัปเดตค่าเริ่มต้นจาก input แต่เป็น number
    totalacc = Number(acc.value);
    totalcash = Number(cash.value);

    let log = `${count} | Current account balance: ${totalacc} | Current cash balance: ${totalcash}\n`;
    historyBox.textContent += log;
    console.log(totalacc, totalcash);
}

function proceed() {
    const DepoWith = document.getElementById("DepoWith");
    const DepoNum = document.getElementById("DepoNum");
    const historyBox = document.getElementById("history");
    
    count++;
    let DepoW = DepoWith.value;
    let DepoN = Number(DepoNum.value);
    let log =""
    if (DepoW === "deposit") {
        if (totalcash >= DepoN) {
            totalacc += DepoN;
            totalcash -= DepoN;
            log = `${count} | Current account balance: ${totalacc} | Current cash balance: ${totalcash}\n`;
        } else {
            log = `${count} | Couldn't deposit entered balance. (Insufficient cash balance)\n`;
        }
    }
    else if (DepoW === "withdraw") {
        if (totalacc >= DepoN) {
            totalacc -= DepoN;
            totalcash += DepoN;
            log = `${count} | Current account balance: ${totalacc} | Current cash balance: ${totalcash}\n`;
        } else {
            log = `${count} | Couldn't withdraw entered balance. (Insufficient account balance)\n`;
        }
    }

    historyBox.textContent += log;
    }
