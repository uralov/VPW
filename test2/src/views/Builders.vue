<template>
  <v-card>
    <v-list rounded flat>
      <v-subheader>BUILDERS</v-subheader>
      <v-list-item
        v-for="item in items"
        :key="item.id"
      >
        <v-list-item-action>
          <v-btn 
            :loading="item.load"
            color="green"
            icon
            @click="startBuilders(item.id)"
          >
            <v-icon>mdi-play-circle-outline</v-icon>
          </v-btn>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon>{{ configIcon }}</v-icon>
          </v-btn>
        </v-list-item-action>

      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
  export default {
    data: function () {
      return {
        items: [
          { id: 1, text: 'Car body', icon: 'mdi-clock', load: false },
          { id: 2, text: 'Motor', icon: 'mdi-account', load: false },
          { id: 3, text: 'Wheels', icon: 'mdi-flag', load: false },
        ],
        loading: false,
        configIcon: 'mdi-file-edit-outline'
      }
    },
    methods: {
      startBuilders(id) {
        this.items.find( i => i.id === id).load = !this.loading
        setTimeout(() => (this.items.find( i => i.id === id).load = this.loading), 3000)
      }
    }
  }
</script>