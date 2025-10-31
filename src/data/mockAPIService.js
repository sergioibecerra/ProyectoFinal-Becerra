import { items } from "./data"

export function getAllItems(){
  return new Promise((resolve, reject) => {
    const itemsRequested = items
    if (itemsRequested.length > 0) {
      setTimeout(() => { resolve(itemsRequested) }, 1000)
    } else {
      setTimeout(() => { reject("No se encontraron productos") }, 1000)
    }
  })
}

export function getItemsByCategory(categoryId){
  return new Promise((resolve, reject) => {
    const itemsRequested = items.filter((item) => item.categoryId === categoryId)
    if (itemsRequested.length > 0) {
      setTimeout(() => { resolve(itemsRequested) }, 1000)
    } else {
      setTimeout(() => { reject("No se encontraron productos en la categoría") }, 1000)
    }
  })
}

export function getItemById(itemId){
  return new Promise((resolve, reject) => {
    const itemRequested = items.find((item) => String(item.id) === itemId)
    if (itemRequested) {
      setTimeout(() => { resolve(itemRequested) }, 1000)
    } else {
      setTimeout(() => { reject("No se encontró el producto solicitado") }, 1000)
    }
  })
}
