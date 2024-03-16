const { combineRgb } = require('@companion-module/base')
const v3 = require('node-hue-api').v3

module.exports = function (self) {
    self.setFeedbackDefinitions({
        light: {
            name: 'Light',
            type: 'boolean',
            defaultStyle: {
                bgcolor: combineRgb(0, 255, 0),
                color: combineRgb(0, 0, 0),
            },
            options: [
                {
                    id: 'light',
                    type: 'dropdown',
                    label: 'Light',
                    default: 'Select light',
                    choices: self.lights.map((light) => ({
                        id: light.id,
                        label: light.name
                    }))
                }
            ],
            callback: async (feedback) => {                
                const light = self.lights.find((light) => light.id == feedback.options.light);
                
                if (light) {
                    return light.state.on;
                }
            }
        },
    })
}