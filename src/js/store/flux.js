const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			favorites: []
		},
		actions: {
			getUpdateFavorite: (item) => {
				const store = getStore();
		
				const favorite = store.favorites.find((fav) => fav._id === item._id);
		
				if (favorite) {
				  setStore({
					favorites: store.favorites.filter((fav) => fav._id !== item._id),
				  });
				  localStorage.setItem("favorites", JSON.stringify(store.favorites));
				} else {
				  setStore({ favorites: [...store.favorites, item] });
				  localStorage.setItem("favorites", JSON.stringify(store.favorites));
				}
			  },
			getCharacter: async () => {
			const store = getStore()
			try {
				for (let index = 1; index <= 10; index++) {
					const response = await fetch(`https://www.swapi.tech/api/people/${index}`)
					if (!response.ok) {
						console.log("error")
						return false
					}
					const data = await response.json()
					store.characters.push(data.result)
					setStore({characters:store.characters})
				}
				 	
			} catch (error) {
				console.log(error)
				
			}		
			},
			getPlanet: async () => {
				const store = getStore()
				try {
					for (let index = 2; index <= 10; index++) {
						const response = await fetch(`https://www.swapi.tech/api/planets/${index}`)
						if (!response.ok) {
							console.log("error")
							return false
						}
						const data = await response.json()
						store.planets.push(data.result)
						setStore({planets:store.planets})
					}
						 
				} catch (error) {
					console.log(error)
					
				}		
				},
				getVehicle: async () => {
					const store = getStore()
					let start = 4 
					try {
					  for (let index = start; index <= 24; index++) {
						const response = await fetch(`https://www.swapi.tech/api/vehicles/${index}`)
						if (!response.ok) {
						  console.log("error")
						  start = index + 1 
						  continue 
						}
						const data = await response.json()
						store.vehicles.push(data.result)
						setStore({vehicles: store.vehicles})
					  }
					} catch (error) {
					  console.log(error)
					}
				  }
		}
	};
};

export default getState;