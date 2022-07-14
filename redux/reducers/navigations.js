
// THE REDUCER KEYS
export const GO_BACK_KEY = "go_back"
export const GO_AHEAD_KEY = "go_ahead"

const initialStete = {
    navigationsList:[]
}
export default function navigations(state = initialStete, {type,payload}) {
    switch (type) {
      case GO_BACK_KEY:
        return 
      default:
        return state
    }
  }