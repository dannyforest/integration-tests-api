import { mount } from "@vue/test-utils";
import { describe, it, expect } from 'vitest';
import PhotosComponent from "@/components/PhotosComponent.vue";

describe("PhotosComponent", () => {
    it("should load the photos from the API", async () => {
        const wrapper = mount(PhotosComponent);

        await wrapper.vm.loadPhotos();

        expect(wrapper.vm.photos.length).toBeGreaterThan(0);
        expect(wrapper.findAll('.photo-card').length).toBeGreaterThan(0);
    })
})