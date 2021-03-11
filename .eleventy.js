module.exports = function(eleventyConfig) {
	eleventyConfig.setTemplateFormats(["md"]);
	eleventyConfig.addPassthroughCopy({
		"public": "."
	});
	return {
		dir: {
			input: 'content',
			output: 'dist'
		}
	}	
};