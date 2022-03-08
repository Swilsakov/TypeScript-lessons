function strip(x: string | number) {
    // если число то
    if (typeof x === 'number') {
        return x.toFixed(2)
    }
    // иначе строка
    return x.trim()
}

class MyResponse {
    header = 'response header'
    result = 'response result'
}

class MyError {
    header = 'error header'
    message = 'error meassage'
}

function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        }
    } else {
        return {
            info: res.header + res.message
        }
    }
}

// =================================

type AlertType = 'succes' | 'danger' | 'warning'
function setAlertType(type: AlertType) {
    // ...
}


setAlertType('succes')
setAlertType('warning')
// setAlertType('default')
