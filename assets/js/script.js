const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      contadorID: 1,
      imagenes: [],
      currentIndex: 0,
      proyectos: [
        {
          Id: 1,
          name: "okasa",
          Imágenes: {
            url1: "https://res.cloudinary.com/dntf2dwro/image/upload/v1694721175/cld-sample-5.jpg",
            url2: "./assets/img/slider/2.png",
            url3: "https://res.cloudinary.com/dntf2dwro/image/upload/v1694721145/samples/sheep.jpg",
          },
        },
        {
          Id: 2,
          name: "milca",
          Imágenes: {
            url1: "https://res.cloudinary.com/dntf2dwro/image/upload/v1694721145/samples/sheep.jpg",
            url2: "https://res.cloudinary.com/dntf2dwro/image/upload/v1694721145/samples/sheep.jpg",
            url3: "./assets/img/slider/6.png",
          },
        },
      ],
    };
  },
  methods: {
    cambiarContadorID: function (id) {
      console.log(id);
      this.contadorID = id;
      this.currentIndex = 0; // Cuando cambias el ID, reinicia el índice a 0
    },
    cambiarImagen(direccion) {
      // Cambiar la imagen actual basada en la dirección (1 para siguiente, -1 para anterior)
      this.currentIndex =
        (this.currentIndex + direccion + this.imagenes.length) %
        this.imagenes.length;
    },
  },
  computed: {
    montarImagenes() {
      const proyecto = this.proyectos.find((p) => p.Id === this.contadorID);
      if (proyecto) {
        this.imagenes = Object.values(proyecto.Imágenes);
      } else {
        this.imagenes = [];
      }
    },
  },
}).mount("#app");
