import HttpRequest from '..'

export function getHomeGoodPriceData () {
  return HttpRequest.get({
    url: '/home/goodprice'
  })
}