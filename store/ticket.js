const loadInitTicket = () => {
  let initTicket = localStorage.getItem('f')
  const defaultTicket = {
    movie: undefined,
    theater_name: undefined,
    daymonth: undefined,
    time: undefined,
    type: undefined,
    price: undefined,
    seat: [],
  }
  try {
    initTicket = Object.assign(defaultTicket, JSON.parse(initTicket))
  }catch(e) {
    initTicket = defaultTicket
  }
  return initTicket
}
export const state = () => ({
  ticket: loadInitTicket()
})

export const mutations = {
  set_ticket(state, value) {
    state.ticket = value
  },
  set_seat(state, value) {
    state.ticket.seat = value
  }
}

export const actions = {
  setTicket({ commit }, value) {
    commit('set_ticket', value)
  },
  setSeat({ commit }, value) {
    commit('set_seat', value)
  }
}

export const getters = {
  ticket: state => state.ticket
}