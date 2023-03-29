function loadContentDiv(section) {
    if (section == 'home') document.getElementById('container').innerHTML=document.getElementById('container-home').innerHTML;
    if (section == 'ofertas') document.getElementById('container').innerHTML=document.getElementById('container-ofertas').innerHTML;
    if (section == 'productos') document.getElementById('container').innerHTML=document.getElementById('container-productos').innerHTML;
    if (section == 'editarPerfil') document.getElementById('container').innerHTML=document.getElementById('container-editarPerfil').innerHTML;
    if (section == 'pedidosRealizados') document.getElementById('container').innerHTML=document.getElementById('container-pedidosRealizados').innerHTML;
    if (section == 'logout') window.location.replace("../login.html");
}