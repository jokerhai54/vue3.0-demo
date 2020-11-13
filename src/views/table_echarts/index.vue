<template>
  <div class="API">
    <a-table :data-source="state.data">
      <a-table-column-group>
        <template #title><span style="color: #1890ff">Name</span></template>
        <a-table-column key="firstName" data-index="firstName">
          <template #title
            ><span style="color: #1890ff">First Name</span></template
          >
        </a-table-column>
        <a-table-column
          key="lastName"
          title="Last Name"
          data-index="lastName"
        />
      </a-table-column-group>
      <a-table-column key="age" title="Age" data-index="age" />
      <a-table-column key="address" title="Address" data-index="address" />
      <a-table-column key="tags" title="Tags" data-index="tags">
        <template #default="{ text: tags }">
          <div v-html="tags"></div>
        </template>
      </a-table-column>
      <a-table-column key="action" title="Action">
        <template #default="{ text, record }">
          <span>
            <a>Action 一 {{ record.firstName }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
          </span>
        </template>
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
import { reactive, onMounted, watch } from "vue";
import echarts from "echarts";

export default {
  name: "App",
  setup() {
    const state = reactive({
      data: [
        {
          key: "1",
          firstName: "John",
          lastName: "Brown",
          age: 32,
          address: "New York No. 1 Lake Park",
        },
        {
          key: "2",
          firstName: "Jim",
          lastName: "Green",
          age: 42,
          address: "London No. 1 Lake Park",
        },
        {
          key: "3",
          firstName: "Joe",
          lastName: "Black",
          age: 32,
          address: "Sidney No. 1 Lake Park",
        },
      ],
      e_data: [
        [999, 120, 390, 110, 240, 314, 10],
        [99, 220, 190, 110, 240, 14, 100],
        [399, 20, 90, 110, 240, 914, 10],
      ],
    });
    state.data.forEach((item, index) => {
      item[
        "tags"
      ] = `<div id="main${index}" style="width: 100px; height: 70px"></div>`;
    });

    console.log(111);

    onMounted(() => {
      console.log(333);
      state.data.forEach((item, index) => {
        item["arr"] = state.e_data[index];
        var myChart = echarts.init(document.getElementById(`main${index}`));
        myChart.setOption({
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: item.arr,
              type: "line",
              smooth: true,
            },
          ],
        });
      });
    });
    console.log(222);
    return {
      state,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>