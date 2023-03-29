function loadContentDiv(section) {
    if (section == 'home') document.getElementById('container').innerHTML=document.getElementById('container-home').innerHTML;
    if (section == 'agregarProductos') document.getElementById('container').innerHTML=document.getElementById('container-agregarProductos').innerHTML;
    if (section == 'editarPerfil') document.getElementById('container').innerHTML=document.getElementById('container-editarPerfil').innerHTML;
    if (section == 'logout') window.location.replace("../login.html");
    }