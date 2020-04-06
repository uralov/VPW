<template>
  <v-data-table
    :headers="headers"
    :items="strings"
    :expanded.sync="expanded"
    item-key="id"
    show-expand
    class="elevation-2"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>HISTORY</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length" style="white-space:pre-wrap">{{ item.logs }}</td>
    </template>
    <template v-slot:item.status="{ item }">
      <v-chip :color="getColor(item.status)">{{ item.status }}</v-chip>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: function () {
      return {
        expanded: [],
        headers: [
          {
            text: 'Id',
            align: 'start',
            value: 'id',
          },
          { text: 'Name', value: 'name' },
          { text: 'Status', value: 'status' },
          { text: 'Start Time', value: 'startTime' },
          { text: 'End Time', value: 'endTime' },
          { text: 'Duration', value: 'duration' },
          { text: 'Logs', value: 'data-table-expand' },
        ],
        strings: [
          {
            id: '1',
            name: 'unix',
            status: 'Success',
            startTime: '1',
            endTime: '2',
            duration: '23',
            logs: 'print text\nnetstat\nreturn response\nprint response'
          },
          {
            id: '2',
            name: 'kek',
            status: 'Failed',
            startTime: '1',
            endTime: '2',
            duration: '43',
            logs: 'logs'
          },
          {
            id: '3',
            name: 'unix',
            status: 'Success',
            startTime: '1',
            endTime: '2',
            duration: '11',
            logs: 'logs'
          },
          {
            id: '4',
            name: 'unix',
            status: 'Waited',
            startTime: '1',
            endTime: '2',
            duration: '1',
            logs: 'logs'
          },
          {
            id: '6',
            name: 'unix',
            status: 'Success',
            startTime: '1',
            endTime: '2',
            duration: '124',
            logs: 'logs'
          },
          {
            id: '5',
            name: 'unix',
            status: 'Failed',
            startTime: '1',
            endTime: '2',
            duration: '76',
            logs: 'logs'
          },
          {
            id: '7',
            name: 'unix',
            status: 'Waited',
            startTime: '1',
            endTime: '2',
            duration: '5',
            logs: 'logs'
          },
        ],
      }
    },
    methods: {
        getColor(status) {
            if (status == 'Success') return 'green'
            else if (status == 'Failed') return 'red'
            else return 'orange'
        }
    }
  }
</script>