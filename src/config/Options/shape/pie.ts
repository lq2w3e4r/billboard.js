/**
 * Copyright (c) 2017 ~ present NAVER Corp.
 * billboard.js project is licensed under the MIT license
 */
/**
 * x Axis config options
 */
export default {
	/**
	 * Set pie options
	 * @name pie
	 * @memberof Options
	 * @type {object}
	 * @property {object} pie Pie object
	 * @property {boolean} [pie.label.show=true] Show or hide label on each pie piece.
	 * @property {Function} [pie.label.format] Set formatter for the label on each pie piece.
	 * @property {number} [pie.label.threshold=0.05] Set threshold to show/hide labels.
	 * @property {number|Function} [pie.label.ratio=undefined] Set ratio of labels position.
	 * @property {boolean|object} [pie.expand=true] Enable or disable expanding pie pieces.
	 * @property {number} [pie.expand.rate=0.98] Set expand rate.
	 * @property {number} [pie.expand.duration=50] Set expand transition time in ms.
	 * @property {number|object} [pie.innerRadius=0] Sets the inner radius of pie arc.
	 * @property {number} [pie.padAngle=0] Set padding between data.
	 * @property {number} [pie.padding=0] Sets the gap between pie arcs.
	 * @property {object} donut Donut object
	 * @property {number} [donut.startingAngle=0] Set starting angle where data draws.
	 * @example
	 *  pie: {
	 *      label: {
	 *          show: false,
	 *          format: function(value, ratio, id) {
	 *              return d3.format("$")(value);
	 *
	 *              // to multiline, return with '\n' character
	 *              // return value +"%\nLine1\n2Line2";
	 *          },
	 *          threshold: 0.1,
	 *
	 *          // set ratio callback. Should return ratio value
	 *          ratio: function(d, radius, h) {
	 *              ...
	 *              return ratio;
	 *          },
	 *          // or set ratio number
	 *          ratio: 0.5
	 *      },
	 *
	 *      // disable expand transition for interaction
	 *      expand: false,
	 *
	 *      expand: {
	 *      	// set duration of expand transition to 500ms.
	 *          duration: 500,
	 *
	 *      	// set expand area rate
	 *          rate: 1
	 *      },
	 *
	 *      innerRadius: 0,
	 *
	 *      // set different innerRadius for each data
	 *      innerRadius: {
	 *      	data1: 10,
	 *      	data2: 0
	 *      }
	 *
	 *      padAngle: 0.1,
	 *      padding: 0,
	 *      startingAngle: 1
	 *  }
	 */
	pie_label_show: true,
	pie_label_format: <(() => number|string)|undefined> undefined,
	pie_label_threshold: 0.05,
	pie_label_ratio: <(() => number)|undefined> undefined,
	pie_expand: <boolean|{rate?: number; duration?: number;}> {},
	pie_expand_rate: 0.98,
	pie_expand_duration: 50,
	pie_innerRadius: <number|{[key: string]: number}> 0,
	pie_padAngle: 0,
	pie_padding: 0,
	pie_startingAngle: 0
};
