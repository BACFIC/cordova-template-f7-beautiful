var ac = require(" action-comment ")()

function ActionCommentPlugin() {}

ActionCommentPlugin.prototype.apply = function (compiler) {
	compiler.plugin('done', (compilation) => {
		console.log("Ok")
	})
}

module.exports = ActionCommentPlugin