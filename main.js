let usuarioActual = null;
let currentSection = 'destinos';

// Mostrar la sección actual, cargando datos desde la API
async function showSection(section) {
    currentSection = section;
    document.getElementById('searchInput').value = '';
    document.getElementById('filterContainer').style.display = section === 'favoritos' ? 'flex' : 'none';
    document.getElementById('content').innerHTML = '';

    if (section === 'admin') {
        mostrarPanelAdmin();
    } else {
        await cargarContenido();  // Cargar contenido desde la API
    }
}

// Cargar contenido desde la API según la sección actual
async function cargarContenido() {
    const contentContainer = document.getElementById('content');
    contentContainer.innerHTML = '';

    let items = [];
    try {
        // Obtener datos desde la API en función de la sección
        switch (currentSection) {
            case 'destinos':

                items = await fetch('http://localhost:3000/api/destinos').then(res => res.json());
                break;
            case 'hoteles':
                items = await fetch('http://localhost:3000/api/hoteles').then(res => res.json());
                break;
            case 'restaurantes':
                items = await fetch('http://localhost:3000/api/restaurantes').then(res => res.json());
                break;
            case 'favoritos':
                if (usuarioActual) items = usuarioActual.favoritos;
                break;
        }

        // Renderizar los items recibidos desde la API
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
        <img src="${item.imagen}" alt="${item.nombre}">
        <h3>${item.nombre}</h3>
        <p>${item.destino ? `En ${item.destino}` : `Descubre la magia de ${item.nombre}`}</p>
        <button class="favorite-btn" onclick="event.stopPropagation(); toggleFavorito('${currentSection}', ${item.id})">
          ${usuarioActual && usuarioActual.favoritos.some(fav => fav.id === item.id && fav.tipo === currentSection) ? '❤️' : '🤍'}
        </button>
      `;
            card.onclick = () => mostrarDetalle(item);
            contentContainer.appendChild(card);
        });
    } catch (error) {
        console.error("Error cargando el contenido: ", error);
    }
}

// Mostrar detalles de un item
function mostrarDetalle(item) {
    document.getElementById('detalleNombre').textContent = item.nombre;
    document.getElementById('detalleImagen').src = item.imagen;
    document.getElementById('detalleDescripcion').textContent = item.descripcion;
    document.getElementById('detalleDestino').textContent = item.destino ? `Destino: ${item.destino}` : '';
    showModal('detalleModal');
}

// Función para registrar usuarios mediante la API
async function registrarUsuario(event) {
    event.preventDefault();
    const username = document.getElementById('regUsername').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const errorElement = document.getElementById('regError');

    if (!validarEmail(email)) {
        errorElement.textContent = 'Por favor, ingrese un correo electrónico válido';
        return;
    }

    if (!validarPassword(password)) {
        errorElement.textContent = 'La contraseña debe tener al menos 8 caracteres, incluir mayúsculas, minúsculas, números y caracteres especiales';
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/usuarios', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, email, password })
        });

        if (!response.ok) {
            errorElement.textContent = 'Error al registrar el usuario';
            return;
        }

        alert('Usuario registrado con éxito');
        closeModal('registerModal');
        errorElement.textContent = '';
    } catch (error) {
        errorElement.textContent = 'Error al registrar el usuario';
    }
}

// Función para iniciar sesión mediante la API
async function loginUsuario(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const errorElement = document.getElementById('loginError');

    try {
        const usuario = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(res => res.json());

        if (usuario) {
            usuarioActual = usuario;
            document.getElementById('favoritosLink').style.display = 'inline-block';
            document.getElementById('adminLink').style.display = usuario.isAdmin ? 'inline-block' : 'none';
            alert('Inicio de sesión exitoso');
            closeModal('loginModal');
            actualizarHeaderButtons();
            errorElement.textContent = '';
        } else {
            errorElement.textContent = 'Correo electrónico o contraseña incorrectos';
        }
    } catch (error) {
        errorElement.textContent = 'Error iniciando sesión';
    }
}

// Actualizar los botones del header
function actualizarHeaderButtons() {
    const headerButtons = document.querySelector('.header-buttons');
    if (usuarioActual) {
        headerButtons.innerHTML = `
      <span>Bienvenido, ${usuarioActual.username}</span>
      <button onclick="cerrarSesion()">Cerrar Sesión</button>
    `;
    } else {
        headerButtons.innerHTML = `
      <button onclick="showModal('registerModal')">Registrarse</button>
      <button onclick="showModal('loginModal')">Iniciar Sesión</button>
    `;
    }
}

// Cerrar sesión del usuario actual
function cerrarSesion() {
    usuarioActual = null;
    document.getElementById('favoritosLink').style.display = 'none';
    document.getElementById('adminLink').style.display = 'none';
    actualizarHeaderButtons();
    showSection('destinos');
}

// Validación de email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validación de password
function validarPassword(password) {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return re.test(password);
}

// Función para alternar favoritos (esto debería sincronizarse con la base de datos también)
async function toggleFavorito(tipo, id) {
    if (!usuarioActual) {
        alert('Debes iniciar sesión para agregar favoritos');
        return;
    }

    const index = usuarioActual.favoritos.findIndex(fav => fav.id === id && fav.tipo === tipo);
    if (index > -1) {
        usuarioActual.favoritos.splice(index, 1);  // Eliminar favorito
    } else {
        let item;
        switch (tipo) {
            case 'destinos':
                item = await fetch(`http://localhost:3000/api/destinos/${id}`).then(res => res.json());
                break;
            case 'hoteles':
                item = await fetch(`http://localhost:3000/api/hoteles/${id}`).then(res => res.json());
                break;
            case 'restaurantes':
                item = await fetch(`http://localhost:3000/api/restaurantes/${id}`).then(res => res.json());
                break;
        }
        if (item) {
            usuarioActual.favoritos.push({ ...item, tipo });
        }
    }
    cargarContenido();
}

// Event listeners para cerrar modales
document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.onclick = function () {
        this.closest('.modal').style.display = "none";
    }
});

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

document.getElementById('searchInput').addEventListener('input', buscar);

// Cargar la sección inicial al cargar la página
window.onload = async () => {
    showSection('destinos');
    const destinoFiltro = document.getElementById('destinoFiltro');
    const destinos = await fetch('http://localhost:3000/api/destinos').then(res => res.json());
    destinos.forEach(destino => {
        const option = document.createElement('option');
        option.value = destino.nombre;
        option.textContent = destino.nombre;
        destinoFiltro.appendChild(option);
    });
};

function showModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";  // Muestra el modal
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";  // Oculta el modal
    }
}

// Event listener para cerrar modales
document.querySelectorAll('.modal .close').forEach(closeBtn => {
    closeBtn.onclick = function () {
        closeModal(this.closest('.modal').id);
    }
});

// Cierra el modal al hacer clic fuera de él
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
};

