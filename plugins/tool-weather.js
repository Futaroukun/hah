import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw " please provide place or location name"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "Â°C"
    const Minimum_Temperature = res.data.main.temp_min + "Â°C"
    const Maximum_Temperature = res.data.main.temp_max + "Â°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `ã ð ã Place: ${name}\nã ðºï¸ ã Country: ${Country}\nã ð¤ï¸ ã Weather: ${Weather}\nã ð¡ï¸ ãTemperature: ${Temperature}\nã ð  ã Minimum Temperature: ${Minimum_Temperature}\nã ð ã Maximum Temperature: ${Maximum_Temperature}\nã ð¦ ã Humidity: ${Humidity}\nã ð¬ï¸ ã Wind: ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "Error location not found!!!"
  }
}

handler.help = ['weather']
handler.tags = ['tools']

handler.command = /^(weather)$/i
handler.limit = true
export default handler
