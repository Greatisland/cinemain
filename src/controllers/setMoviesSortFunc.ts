import type { MovieInfo } from "./slice"
const setMoviesSortFunc = (param: string, movies:MovieInfo[]) => {
  
  //param이 날짜일 경우 sort하기위한 절대값을 반환
  const releaseCalc = (date?: string) => {
    //date가 undefined나 null일 경우 0을 반환
    if(!date) return 0
    const [year, month, day] = date.split('-').map(Number)
    const daysInMonth = new Date(year, month, 0).getDate()
    const total = (year * 12 + month - 1) * daysInMonth + day
    return total
  }

  let renderMovie = [...movies]
  if(param==='release_date'){
    return renderMovie.sort((a, b) => (
      releaseCalc(b[param]) - releaseCalc(a[param])
    ))
  }
  return renderMovie.sort((a, b) => Number(b[param as keyof MovieInfo] ) - Number(a[param as keyof MovieInfo]))
}

export default setMoviesSortFunc

