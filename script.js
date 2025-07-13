document.querySelectorAll('.asignatura').forEach(boton => {
    boton.addEventListener('click', () => {
        const codigo = boton.dataset.codigo;
        const prerequisitos = boton.dataset.prerequisitos ? boton.dataset.prerequisitos.split(',') : [];
        const requisitosCumplidos = prerequisitos.every(req => {
            const reqElem = document.querySelector(`[data-codigo="${req.trim()}"]`);
            return reqElem && reqElem.classList.contains('aprobado');
        });

        if (requisitosCumplidos || prerequisitos.length === 0) {
            boton.classList.toggle('aprobado');
        } else {
            alert('Primero debes aprobar los prerrequisitos.');
        }
    });
});
