<template>
    <div class="product-wrap">
        <div class="product-header">
            <h1>Catalogue</h1>

        </div>
        <div class="product-section">
            <v-card v-for="item in items" :key="item.id" class="mx-auto" max-width="320">
                <v-img :src="item.image" height="200px" /> <v-card-title>
                    {{ item.title }} </v-card-title>

                <v-card-actions>
                    <v-btn color="orange lighten-2" text>
                        Explore
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon @click="toggleItemDetails(item)">
                        <v-icon>{{ item.show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                </v-card-actions>

                <v-expand-transition>
                    <div v-show="item.show">
                        <v-divider></v-divider>

                        <v-card-text>
                            {{ item.description }} </v-card-text>
                    </div>
                </v-expand-transition>
            </v-card>
        </div>

    </div>

</template>

<script>

export default {
    name: 'product-page',
    data() {
        return {
            items: [
                {
                    id: 1,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                    title: 'Top western road trips',
                    description: 'Explore the scenic beauty of the American West...',
                    show: false,
                },
                {
                    id: 2,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                    title: 'Architectural Wonders',
                    description: 'Discover breathtaking buildings from around the globe.',
                    show: false,
                },
                {
                    id: 3,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                    title: 'Natures Delights',
                    description: 'Immerse yourself in stunning landscapes and wildlife.',
                    show: false,
                },
                {
                    id: 4,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
                    title: 'Natures Delights',
                    description: 'Immerse yourself in stunning landscapes and wildlife.',
                    show: false,
                },
                {
                    id: 5,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Natures Delights',
                    description: 'Immerse yourself in stunning landscapes and wildlife.',
                    show: false,
                },
                {
                    id: 6,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Natures Delights',
                    description: 'Immerse yourself in stunning landscapes and wildlife.',
                    show: false,
                },
                {
                    id: 7,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Natures Delights',
                    description: 'Immerse yourself in stunning landscapes and wildlife.',
                    show: false,
                },
                {
                    id: 8,
                    image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg', title: 'Natures Delights',
                    description: 'Immerse yourself in stunning landscapes and wildlife.',
                    show: false,
                },
            ],
        };
    },
    methods: {
        toggleItemDetails(item) {
            item.show = !item.show;
        },
    },
};
</script>


<style>
.product-wrap {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.product-header {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}

.product-section {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
    justify-content: center;
}
</style>