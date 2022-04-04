

<script>
import {Bar, mixins} from "vue-chartjs"
const { reactiveProp } = mixins
export default {
extends: Bar,
mixins: [reactiveProp],
props: ["revenuechartData", "revenueoptions"],

mounted() {
    this.renderChart(this.revenuechartData, this.revenueoptions)
},
}
</script>

<style>

</style>