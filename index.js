let total = 0;

function getbtn(data) {
    const card = data.closest(".box");
    const itemsName = card.querySelector('.box-info h5').innerText;
    const selectedBox = document.getElementById("selected-box");
    const createLi = document.createElement("li");
    createLi.innerText = itemsName;
    selectedBox.appendChild(createLi);
    const itemPrice = card.querySelector('.box-info h6').innerText.split(" ")[0];
    total = parseInt(total) + parseInt(itemPrice);
    setInnerText("total", total);
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function applyCoupon() {
    const couponCode = document.getElementById("coupon-code").value;
    if (couponCode === "SELL200") {
        const discountedAmount = total * 0.2;
        const netTotal = total - discountedAmount;
        
        // Display the discount and grand total with two decimal
        setInnerText("discount", discountedAmount.toFixed(2));
        setInnerText("grand-total", netTotal.toFixed(2));
    } else {
        alert("Invalid coupon. Please try again.");
    }
}

