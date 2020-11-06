const config = {
  encoding: "UTF-8",
  max_number: 20,
  showMessage: true,
  auto_sort: false,
  timeFormat: "%Y-%m-%d",
  reverse: false,
  divide_by: "type",
  divide_color_by: "type",
  color: {
    Chinese: "#1177CC",
    Japanese: "#667788"
  },
  changeable_color: false,
  divide_changeable_color_by_type: false,
  color_range: ["#ff7e5f", "#feb47b"],
  itemLabel: "推荐热点序号：",
  typeLabel: "热度值",
  item_x: 30+'vw',
  interval_time: 1,
  text_y: -50,
  text_x: 700,
  offset: 350,
  display_barInfo: 0,
  use_counter: false,
  step: 1,
  format: ",.0f",
  postfix: "",
  deformat: function(val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  left_margin: 100,
  right_margin: 100,
  top_margin: 100,
  bottom_margin: 0,
  dateLabel_switch: true,
  dateLabel_x: null,
  dateLabel_y: null,
  allow_up: false,
  always_up: false,
  enter_from_0: true,
  big_value: true,
  use_semilogarithmic_coordinate: false,
  long: false,
  wait: 0,
  update_rate: 1,
  showLabel: true,
  labelx: -10,

  use_img: true,
  imgs: {
    item:
      "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
    条目:
      "http://i1.hdslb.com/bfs/face/983034448f81f45f05956d0455a86fe0639d6a36.jpg",
    任意名称: "path/to/img"
  },
  background_color: "#FFFFFF",
  rounded_rectangle: true,
  show_x_tick: true,
  bar_name_max: 30
};
