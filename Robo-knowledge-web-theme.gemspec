Gem::Specification.new do |s|
    s.name     = 'Robo-knowledge-web-theme'
    s.version  = '1.0.0'
    s.license  = 'MIT'
    s.summary  = 'A Theme For general bolgs and knowledge sharing,you can use it to write your own blog'
    s.author   = 'TIMAVICIIX'
    s.email    = 'timaviciix@outlook.com'
    s.homepage = 'https://github.com/TIMAVICIIX/timaviciix.github.io'
    s.files    = `git ls-files -z`.split("\x0").grep(%r{^_(sass|includes|layouts)/})
end