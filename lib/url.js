/** 
* @description Build the url in get-query format.
* @author ave6990
* @version 1.0.0
* @param {string} url - The base url address.
* @param {Object.<string, string | number | Object | Array>} filter_obj -
*  Query.
* @return {string}
*/
const getUrl = (url, filter_obj) => {
	if (filter_obj) {
		url += '?'

		for (let item in filter_obj) {
			if (typeof(filter_obj[item]) == 'object') {
				for (let opt in filter_obj[item]) {
					url += `${item}=${opt}:${filter_obj[item][opt]}&`
				}
			} else {
				url += `${item}=${filter_obj[item]}&`
			}
		}
	}
	return url
}

export { getUrl }
//module.exports.test = { getUrl }
