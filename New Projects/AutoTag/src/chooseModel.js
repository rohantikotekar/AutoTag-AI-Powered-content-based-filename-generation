// this module handles AI providers: Ollama, LM studio, OpenAI

const axios = require('axios') // javascript library to make HTTP requests

const ollamaApis = async ({ baseURL }) => { // queries the Ollama API to get a list of available models
  try {
    const apiResult = await axios({
      data: {},
      method: 'get',
      url: `${baseURL}/api/tags` // standard endpoint of APIs
    })

    return apiResult.data.models // return available models
  } catch (err) {
    throw new Error(err?.response?.data?.error || err.message)
  }
}

const lmStudioApis = async ({ baseURL }) => { // queries LM studio's api which is OpenAI compatible
  try {
    const apiResult = await axios({
      data: {},
      method: 'get',
      url: `${baseURL}/v1/models` // standard endpoint
    })

    return apiResult.data.data
  } catch (err) {
    throw new Error(err?.response?.data?.error || err.message)
  }
}

const listModels = async options => { // this function routes to the appropriate API provider
  try {
    const { provider } = options

    if (provider === 'ollama') {
      return ollamaApis(options)
    } else if (provider === 'lm-studio') {
      return lmStudioApis(options)
    } else if (provider === 'openai') {
      return [
        { name: 'gpt-4o' },
        { name: 'gpt-4' },
        { name: 'gpt-3.5-turbo' }
      ]
    } else {
      throw new Error('🔴 No supported provider found')
    }
  } catch (err) {
    throw new Error(err.message)
  }
}

const filterModelNames = arr => { // this function normallizes the api response format into -> name: "model-name" 
  return arr.map((item) => {
    if (item.id !== undefined) {
      return { name: item.id }
    } else if (item.name !== undefined) {
      return { name: item.name }
    } else {
      throw new Error('Item does not contain id or name property')
    }
  })
}

const chooseModel = ({ models }) => {
  const preferredModels = [
    'llava', // best vision model
    'llama', // decent general purpose model
    'gemma', // google's model
    'phi', // microsoft's model
    'qwen', // alibabas model
    'aya', // a good mutli-linguagel model
    'mistral', // mistral.ai model
    'mixtral', // mixture of experts
    'deepseek-coder' // code focused model
  ]

  for (const modelName of preferredModels) { // model matching wrt preference
    if (models.some(model => model.name.toLowerCase().includes(modelName))) {
      return models.find(model => model.name.toLowerCase().includes(modelName)).name
    }
  }

  return models.length > 0 ? models[0].name : null
}

module.exports = async options => { //orchestrates entire model matching process
  try {
    const _models = await listModels(options)
    const models = filterModelNames(_models)
    console.log(`⚪ Available models: ${models.map(m => m.name).join(', ')}`)

    const model = await chooseModel({ models })
    if (!model) throw new Error('🔴 No suitable model found')

    return model
  } catch (err) {
    throw new Error(err.message)
  }
}



// design pattern: Chain of Responsibility, Abstraction
// lists suitable preference without user's choice for ease of user