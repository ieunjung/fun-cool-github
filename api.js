const express = require('express')
const router = express.Router()
const fetch = require('node-fetch')

const GITHUB_SEARCH_REPO = 'https://api.github.com/search/repositories'

router.get('/search', async function (req, res) {
  const { keyword } = req.query

  const url = `${GITHUB_SEARCH_REPO}?q=${keyword}&sort=stars&order=desc`
  console.log(`Fetch: ${url}`)

  const response = await fetch(url)
  const jsonResponse = await response.json()

  res.status(200).json(jsonResponse.items.map(item => {
    return {
      name: item.full_name,
      url: item.html_url,
      stars: item.stargazers_count
    }
  }))
})

module.exports = router