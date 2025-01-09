# BanglaDate Library

BanglaDate is a JavaScript library designed to use Bangla dates in JavaScript and web development. It mirrors the JavaScript Date object for familiarity and ease of use.



## Features

- **Easy to Use**: The library closely resembles the JavaScript Date object, making it easy to implement.
- **Dual Input/Output**: Accepts Gregorian or Bangla dates and outputs in both formats.
- **Versatility**: Offers various methods for versatile usage. It accepts both Gregorian and Bangla dates as input and provides output in both formats.
- **No Additional Learning Required**: Users familiar with the JavaScript Date object can seamlessly utilize this library.



## Installation

### Using npm
```bash
npm install bangla-date
```

### Using a CDN
```html
<script src="https://cdn.jsdelivr.net/npm/bangla-date/dist/bangla-date.min.js"></script>
```



## How to Use

### **Import the Library** 

```javascript
// Using ES6 Modules
import BanglaDate from 'bangla-date';

// Or include the script directly in your HTML
const BanglaDate = window.BanglaDate;
```

### **Create a New BanglaDate Object**
Instantiate a new BanglaDate object, optionally passing destructured parameters `{gr, date}`. The `gr` parameter determines if the date provided is Gregorian (`true` by default), while the `date` parameter represents the date string. If parameter is empty, it defaults to the current time.

```javascript
const banglaDate = new BanglaDate({ date: "2024-04-15", gr: true });
```
- `date`: A valid date string or object. Defaults to the current date if not provided.
- `gr`: Boolean indicating whether the input is in Gregorian (`true`) or Bangla (`false`). Defaults to `true`.


   ```javascript
   // Example usage
   const bdDate = new BanglaDate();
   ```

   or

   ```javascript
   // Example usage
   const bdDate = new BanglaDate({ date: "02/23/2014" });
   ```

   or

   ```javascript
   // Example usage
   const bdDate = new BanglaDate({ date: "1429-02-15T00:00:00", gr: false });
   ```

### **Use the Methods**
Utilize the methods provided by the BanglaDate object to perform various operations.

## Methods

### 1. `getFullYear()`
Returns the Bangla year.
```javascript
console.log(banglaDate.getFullYear()); // 1431
```

### 2. `getMonth()`
Returns the Bangla month index (0 for Boishakh, 1 for Joishtho, etc.).
```javascript
console.log(banglaDate.getMonth()); // 0 (Boishakh)
```

### 3. `getDate()`
Returns the Bangla day of the month.
```javascript
console.log(banglaDate.getDate()); // 2
```

### 4. `getDay()`
Returns the day of the week.
```javascript
console.log(banglaDate.getDay()); // 0 (Sunday)
```

### 5. `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`, `getTime()`
Corresponding to their JavaScript Date object counterparts.

### 6. `toString(options)`
Formats the date as a string in Bangla or English.

**Options:**
- `en`: Boolean. Set to `true` for English formatting. Defaults to `false` (Bangla).
- `dayName`: Boolean. Include the day name. Defaults to `true`.
- `monthName`: Boolean. Include the month name. Defaults to `true`.
- `dd`: Boolean. Include day as a two-digit number. Defaults to `false`.

```javascript
console.log(banglaDate.toString()); // "০২ বৈশাখ ১৪৩১, রবিবার"
console.log(banglaDate.toString({ en: true })); // "02 Boishakh 1431, Robibar"
```

### 7. `toTimeString(options)`
Formats the time as a string in Bangla or English.

**Options:**
- `en`: Boolean. Set to `true` for English formatting. Defaults to `false` (Bangla).
- `detailed`: Boolean. Include seconds and milliseconds. Defaults to `false`.
- `tt`: Boolean. Use AM/PM notation. Defaults to `true`.

```javascript
console.log(banglaDate.toTimeString()); // "১২:১৫ অপরাহ্ন"
console.log(banglaDate.toTimeString({ en: true })); // "12:15 PM"
```

### `enDate()`
Returns the corresponding Gregorian date as a JavaScript Date object.
```javascript
console.log(banglaDate.enDate()); // Sun Apr 15 2024
```

## Full Example
```javascript
import BanglaDate from 'bangla-date';

// Initialize the BanglaDate object with a Gregorian date
const banglaDate = new BanglaDate({ date: "2024-04-15", gr: true });

// Get Bangla year, month, and date
console.log(banglaDate.getFullYear()); // 1431
console.log(banglaDate.getMonth());    // 0 (Boishakh)
console.log(banglaDate.getDate());     // 2

// Format the date as a string
console.log(banglaDate.toString()); // "০২ বৈশাখ ১৪৩১, রবিবার"
console.log(banglaDate.toString({ en: true })); // "02 Boishakh 1431, Robibar"

// Format the time as a string
console.log(banglaDate.toTimeString()); // "১২:১৫ অপরাহ্ন"
console.log(banglaDate.toTimeString({ en: true })); // "12:15 PM"

// Set new values
banglaDate.setFullYear(1425);
banglaDate.setMonth(2);
banglaDate.setDate(15);
console.log(banglaDate.toString()); // "১৫ আষাঢ় ১৪২৫"
```

## Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.


## License

This library is provided under the MIT License, allowing free use and distribution.

## Author

**Jahid Hasan Sami**  
Undergraduate Student of Physics  
Dhaka College  
[Facebook Profile](https://www.facebook.com/jahiSami)
