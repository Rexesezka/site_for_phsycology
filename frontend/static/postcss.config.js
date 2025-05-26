module.exports = {
  plugins: {
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace' // Добавляем поддержку Grid
      },
      stage: 3,
      features: {
        'custom-properties': true, // Включаем CSS-переменные
        'nesting-rules': true // Включаем вложенность
      }
    }
  }
}
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-preset-env': {
      preserve: true, // Сохраняет оригинальные значения
      features: {
        'nesting-rules': true
      }
    }
  }
}
