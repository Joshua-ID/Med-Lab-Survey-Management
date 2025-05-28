<template>
  <div class="dashboard-wrapper">
    <h1 class="dashboard-title">Hospital Analytics Dashboard</h1>

    <section class="dashboard-stats">
      <div class="stat-card" v-for="(item, index) in stats" :key="item.title">
        <div class="stat-icon" :class="`stat-${index}`">
          <i :class="item.icon"></i>
        </div>
        <div class="stat-content">
          <h3>{{ item.title }}</h3>
          <p class="stat-value">{{ formattedValue(item.value) }}</p>
          <p
            class="stat-change"
            :class="item.trend > 0 ? 'positive' : 'negative'"
          >
            <i
              :class="item.trend > 0 ? 'pi pi-arrow-up' : 'pi pi-arrow-down'"
            ></i>
            {{ Math.abs(item.trend) }}% from last week
          </p>
        </div>
      </div>
    </section>

    <section class="charts-section">
      <div class="chart-row">
        <div class="chart-container">
          <div id="user-trend-chart" class="chart-box"></div>
        </div>
        <div class="chart-container">
          <div id="call-status-chart" class="chart-box"></div>
        </div>
      </div>

      <div class="chart-row">
        <div class="chart-container">
          <div id="user-role-pie" class="chart-box"></div>
        </div>
        <div class="chart-container">
          <div id="patient-age-chart" class="chart-box"></div>
        </div>
      </div>

      <div class="chart-row">
        <div class="chart-container">
          <div id="appointment-types-chart" class="chart-box"></div>
        </div>
        <div class="chart-container">
          <div id="patient-growth-chart" class="chart-box"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "Dashboard",
  data() {
    return {
      stats: [
        { title: "Total Users", value: 0, trend: 12.5, icon: "pi pi-users" },
        {
          title: "Patients Registered",
          value: 0,
          trend: 8.3,
          icon: "pi pi-user",
        },
        {
          title: "Total Calls Made",
          value: 0,
          trend: -4.2,
          icon: "pi pi-phone",
        },
        {
          title: "Active Appointments",
          value: 0,
          trend: 5.7,
          icon: "pi pi-calendar",
        },
      ],
      charts: {
        userTrend: null,
        callStatus: null,
        userRolePie: null,
        patientAge: null,
        appointmentTypes: null,
        patientGrowth: null,
      },
    };
  },
  methods: {
    formattedValue(value) {
      return value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value;
    },
    async fetchStats() {
      const [
        usersSnapshot,
        patientsSnapshot,
        callsSnapshot,
        appointmentsSnapshot,
      ] = await Promise.all([
        getDocs(collection(db, "users")),
        getDocs(collection(db, "patients")),
        getDocs(collection(db, "calls")),
        getDocs(collection(db, "appointments")),
      ]);

      this.stats[0].value = usersSnapshot.size;
      this.stats[1].value = patientsSnapshot.size;
      this.stats[2].value = callsSnapshot.size;
      this.stats[3].value = appointmentsSnapshot.size;
    },
    initCharts() {
      this.charts.userTrend = this.createChart(
        "user-trend-chart",
        this.getLineChartOption(
          "User Sign-Up Trend",
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May, Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [50, 80, 120, 150, 200, 180, 220, 300, 400, 50, 80, 120]
        )
      );

      this.charts.callStatus = this.createChart(
        "call-status-chart",
        this.getBarChartOption(
          "Call Status Breakdown",
          ["Completed", "Missed", "Failed"],
          [120, 60, 30]
        )
      );

      this.charts.userRolePie = this.createChart(
        "user-role-pie",
        this.getPieChartOption("User Role Distribution", [
          { value: 60, name: "Patients" },
          { value: 30, name: "Admins" },
          { value: 10, name: "Doctors" },
        ])
      );

      this.charts.patientAge = this.createChart(
        "patient-age-chart",
        this.getBarChartOption(
          "Patient Age Distribution",
          ["0-18", "19-35", "36-50", "51+"],
          [45, 120, 85, 40],
          false,
          "horizontal"
        )
      );

      this.charts.appointmentTypes = this.createChart(
        "appointment-types-chart",
        this.getPieChartOption("Appointment Types", [
          { value: 45, name: "Consultation" },
          { value: 30, name: "Check-up" },
          { value: 15, name: "Emergency" },
          { value: 10, name: "Follow-up" },
        ])
      );

      this.charts.patientGrowth = this.createChart(
        "patient-growth-chart",
        this.getLineChartOption(
          "Monthly Patient Growth",
          ["Q1", "Q2", "Q3", "Q4"],
          [50, 80, 120, 150],
          true
        )
      );
    },
    createChart(elementId, option) {
      const chart = echarts.init(document.getElementById(elementId));
      chart.setOption(option);
      return chart;
    },
    getLineChartOption(title, xData, yData, smooth = false) {
      return {
        title: { text: title, left: "center" },
        tooltip: { trigger: "axis" },
        grid: { top: "20%", right: "5%", bottom: "15%", left: "10%" },
        xAxis: { type: "category", data: xData },
        yAxis: { type: "value" },
        series: [
          {
            data: yData,
            type: "line",
            smooth,
            areaStyle: { opacity: 0.3 },
            lineStyle: { width: 3 },
            symbolSize: 8,
          },
        ],
        color: ["#6366F1"],
      };
    },
    getBarChartOption(
      title,
      xData,
      yData,
      showLabel = true,
      direction = "vertical"
    ) {
      return {
        title: { text: title, left: "center" },
        tooltip: { trigger: "axis" },
        grid: { top: "25%", right: "5%", bottom: "15%", left: "12%" },
        [direction === "vertical" ? "xAxis" : "yAxis"]: {
          type: "category",
          data: xData,
        },
        [direction === "vertical" ? "yAxis" : "xAxis"]: { type: "value" },
        series: [
          {
            data: yData,
            type: "bar",
            barWidth: "40%",
            label: showLabel ? { show: true, position: "top" } : undefined,
          },
        ],
        color: ["#10B981"],
      };
    },
    getPieChartOption(title, data) {
      return {
        title: { text: title, left: "center" },
        tooltip: { trigger: "item", formatter: "{b}: {c} ({d}%)" },
        grid: { top: "20%", right: "5%", bottom: "15%", left: "10%" },
        legend: { orient: "vertical", bottom: 0, left: 0 },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: true,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: { show: false },
            emphasis: {
              label: { show: false },
            },
            data,
          },
        ],
        color: ["#3B82F6", "#6366F1", "#8B5CF6", "#EC4899", "#F59E0B"],
      };
    },
    handleResize() {
      Object.values(this.charts).forEach((chart) => chart?.resize());
    },
  },
  async mounted() {
    await this.fetchStats();
    this.$nextTick(() => {
      this.initCharts();
      window.addEventListener("resize", this.handleResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
    Object.values(this.charts).forEach((chart) => chart?.dispose());
  },
};
</script>

<style scoped>
.dashboard-wrapper {
  padding: 1.5rem;
  background-color: #f8fafc;
  min-height: 100vh;
  max-width: 100%;
  overflow-x: hidden;
}

.dashboard-title {
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  font-weight: 600;
  color: var(--st-surface-text);
  margin-bottom: 1.5rem;
  text-align: center;
}

.dashboard-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.stat-card {
  background: var(--st-surface-card);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1.25rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-width: 0; /* Prevent flex overflow */
}

.stat-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  min-width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  color: white;
  flex-shrink: 0;
}

.stat-icon i {
  font-size: 1.1rem;
}

.stat-0 {
  background-color: #6366f1;
}
.stat-1 {
  background-color: #10b981;
}
.stat-2 {
  background-color: #f59e0b;
}
.stat-3 {
  background-color: #ec4899;
}

.stat-content {
  flex: 1;
  min-width: 0; /* Prevent text overflow */
}

.stat-content h3 {
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--st-surface-text);
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.stat-value {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--st-surface-sleek);
  margin-bottom: 0.25rem;
  white-space: nowrap;
}

.stat-change {
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.stat-change.positive {
  color: #10b981;
}

.stat-change.negative {
  color: #ef4444;
}

.charts-section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.chart-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 400px), 1fr));
  gap: 1rem;
}

.chart-container {
  background: var(--st-surface-card);
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  min-width: 0; /* Prevent grid overflow */
}

.chart-container:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.chart-box {
  height: 280px;
  width: 100%;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .chart-box {
    height: 250px;
  }
}

@media (max-width: 768px) {
  .dashboard-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-card {
    padding: 1rem;
  }

  .stat-icon {
    width: 42px;
    height: 42px;
    font-size: 1.1rem;
  }

  .stat-value {
    font-size: 1.1rem;
  }

  .chart-box {
    height: 220px;
  }
}

@media (max-width: 480px) {
  .dashboard-wrapper {
    padding: 1rem;
  }

  .dashboard-stats {
    grid-template-columns: 1fr;
  }

  .chart-row {
    grid-template-columns: 1fr;
  }

  .chart-box {
    height: 360px;
  }

  .stat-card {
    gap: 0.75rem;
    padding: 0.75rem;
  }

  .stat-icon {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }

  .stat-value {
    font-size: 1rem;
  }

  .stat-content h3 {
    font-size: 0.8125rem;
  }

  .stat-change {
    font-size: 0.6875rem;
  }
}

/* Very small devices */
@media (max-width: 360px) {
  .chart-box {
    height: 180px;
  }
}
</style>
