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

    if (DepoW === "deposit") {
        totalacc += DepoN;
        totalcash -= DepoN;
    } else {
        totalacc -= DepoN;
        totalcash += DepoN;
    }

    let log = `${count} | Current account balance: ${totalacc} | Current cash balance: ${totalcash}\n`;
    historyBox.textContent += log;
}
