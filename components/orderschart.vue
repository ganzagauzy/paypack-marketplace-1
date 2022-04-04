

<script>
import {Bar} from "vue-chartjs"
export default {
extends: Bar,
props: ["orderchartData", "orderoptions"],

mounted() {
    this.renderChart(this.orderchartData, this.orderoptions)
},
}
</script>

<style>

</style>