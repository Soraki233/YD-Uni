const push = (url) => {
	return new Promise((resove, reject) => {
		uni.navigateTo({
			url,
			success(res) {
				resove(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

const switchTab = (url) => {
	return new Promise((resove, reject) => {
		uni.switchTab({
			url,
			success(res) {
				resove(res)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}


export {
	push,
	switchTab
}