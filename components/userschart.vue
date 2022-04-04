

<script>
import {Bar, mixins} from "vue-chartjs"
const { reactiveProp } = mixins
export default {
extends: Bar,
mixins: [reactiveProp],
props: ["userchartData", "useroptions"],

mounted() {
    this.renderChart(this.userchartData, this.useroptions)
},
}
</script>

<style>

</style>