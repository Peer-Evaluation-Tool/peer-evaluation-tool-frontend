  <template #header>Put your ratings here!
  <table class="custom-table">
      <thead>
          <tr>
              <th v-for="(header, index) in headers" :key="index">{{ header }}</th>
          </tr>
      </thead>
      <tbody>
      <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
        <td v-for="(cell, cellIndex) in row" :key="cellIndex">
          <router-link :to="{ name: 'content', params: { id: cell }}" class="router-link">{{ cell }}</router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>

export default {
    name: 'RatingTable',
    props: {
        headers: Array,
        rows: Array
    },
    data() {
        return {
            tableHeaders: ['ID', 'Category', 'Task', 'Description'],
            tableRows: [
                ['11', 'Bug', 'Fix', 'Fixed Bug'],
                ['12', 'Doc', 'Fix', 'wrote document'],
                ['13', 'Feature', 'Fix', 'tested feature'],
                ['14', 'Research', 'Fix', 'researched router']
            ]
        };
    }
};
</script>

<style>
.custom-table {
  width: 100%;
  border-collapse: collapse;
}

.custom-table th { 
  background-color: white;
  border-bottom: 2px solid black;
  font-weight: bold;
  padding: 10px;
}

.custom-table td {
  background-color: white;
  border-bottom: 1px solid black;
  padding: 10px;
}
</style>
