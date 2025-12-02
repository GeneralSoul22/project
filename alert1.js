document.getElementById('order').addEventListener('submit',function(event){
    event.preventDefault();
    const name=document.getElementById('name').value.trim();
    const name1=document.getElementById('name1').value.trim();
    const age=document.getElementById('age').value.trim();
    const phn=document.getElementById('phn').value.trim();
    const pwd=document.getElementById('pwd').value.trim();

    const phoneRegex=/^[0-9]{10}$/;

    if(!phoneRegex.test(phn)){
        alert('please enter a valid 10-degit phone number');
        return;
    }

    if(!name||!name1||!age||!phn||!pwd){
        alert('please fill out all fields');
        return;
    }

    alert('order placed successfully...');
    window.location.href="alert.html";

});