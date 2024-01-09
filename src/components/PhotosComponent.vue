<template>
  <div>
    <h1>Photos</h1>
    <div class="photo-grid">
      <div v-for="photo in photos" :key="photo.id" class="photo-card">
        <img :src="photo.thumbnailUrl" :alt="photo.title">
        <p>{{ photo.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      photos: [],
    };
  },
  methods: {
    async loadPhotos() {
      const apiEndpoint = 'https://jsonplaceholder.typicode.com/photos';
      try {
        const response = await axios.get(apiEndpoint);
        this.photos = response.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
  mounted() {
    this.loadPhotos();
  },
};
</script>

<style>
.photo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.photo-card {
  text-align: center;
  border: 1px solid #ccc;
  padding: 10px;
}

.photo-card img {
  max-width: 100%;
  height: auto;
}
</style>
