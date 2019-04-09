test=$(cd source/_posts && git pull | grep Aborting)
if [[ "$test" != ~Aborting ]]; then
    echo "Aborting"
    rm -rf source/_posts/
    echo $(git clone https://github.com/hk029/tech-blog.git ./source/_posts)
fi
find ./* | grep README |xargs rm -rf
log=npx hexo g
echo $log