var budget=0;

document.addEventListener('DOMContentLoaded', e => {
    let formElement = document.forms.form;

    formElement.addEventListener('submit', e => {
        e.preventDefault();
        const div=document.createElement("div");
        const reason=document.createTextNode(document.getElementById("reason").value);
        const amount=document.createTextNode(document.getElementById("amount").value);
        const amountValue=document.getElementById("amount").value;
        var radio=document.getElementsByName("in-out");
        const div2=document.createElement("div");
        const currentbudget=document.getElementById("current-budget");
        const garbage=document.getElementById("value");
        
        if(document.getElementById("reason").value==="" || document.getElementById("amount").value ==="" ||
         document.getElementById("in").checked===false && document.getElementById("out").checked===false){
            if(document.getElementById("in").checked===false && document.getElementById("out").checked===false){
                alert("Select income or expense");
            }
            if(document.getElementById("amount").value===""){
                alert("Insert amount");
            }
            if(document.getElementById("reason").value===""){
                alert("Insert reason");
            }
        }
        else{
            if(radio[0].checked){     
                div.append("+", amount, " ", reason);
                const element = document.getElementById("budget");
                div.setAttribute("id","list");
                element.appendChild(div);

                budget+=(+amountValue);
                numberBudget=document.createTextNode(budget);
                div2.appendChild(numberBudget);
                div2.setAttribute("id","value")
                currentbudget.replaceChild(div2, garbage);
            }
            else{
                if(budget<(+amountValue)){
                    alert("Insufficient funds!");
                }
                else{
                    div.append("-", amount, " ", reason);
                    const element = document.getElementById("budget");
                    div.setAttribute("id","list");
                    element.appendChild(div);
    
                    budget-=(+amountValue);
                    numberBudget=document.createTextNode(budget);
                    div2.appendChild(numberBudget);
                    div2.setAttribute("id","value")
                    currentbudget.replaceChild(div2, garbage); 
                }
            }
            window.scrollTo({
                left: 0,
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
            if (body.scrollHeight > body.clientHeight)
            {
                document.getElementById("scroll-button").style.opacity="100%";
            } 
        }
    });
});

document.getElementById("scroll-button").addEventListener('click', function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    });
});