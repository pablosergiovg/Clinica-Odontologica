export const obtenerFavoritosDeStorage = () => {
    const favoritos = localStorage.getItem("favs");
    return favoritos ? JSON.parse(favoritos) : [];
};

export const setFavoritosStorage = (odontologo) => {
    let favoritos = obtenerFavoritosDeStorage();
    const nuevoFavoritos = favoritos.filter(fav => {
        return fav.id === odontologo.id
    });

    if(nuevoFavoritos.length === 0){
        favoritos.push(odontologo)
        localStorage.setItem("favs", JSON.stringify(favoritos));
        alert(`Odontologo ${odontologo.name} se agregó a favoritos`)
        // return true
    }else{
        alert(`Odontologo ${odontologo.name} ya esta en favoritos`)
    }
}

export const eliminarDeFavorito = (id, name) => {
    let favoritos = obtenerFavoritosDeStorage();
    const index = favoritos.findIndex(fav => fav.id === id);
    if(index !== -1){
        favoritos.splice(index, 1);
        localStorage.setItem("favs", JSON.stringify(favoritos));
        alert(`Odontologo ${name} se eliminó de la lista`)
    }else{
        alert(`Odontologo ${name} no se pudo eliminar de la lista`)
    }
}

export const esFavorito = (id) => {
    const favoritos = obtenerFavoritosDeStorage();
    const nuevoFavoritos = favoritos.filter(fav => {
        return fav.id === id
    });
    return nuevoFavoritos.length === 1;
};