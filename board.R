library(tidyverse)
library(png)
library(grid)

img_names <- read_csv("hrefs.txt", col_names = c("name"))
img_names
img_paths <- read_csv("imgs.txt", col_names = c("path"))
img_paths

emojidata <- bind_cols(img_names, img_paths)

emoji <- readPNG(paste0('images/',emojidata$path[3]))
emojidata$path[3]


ggplot() +
  annotation_custom(rasterGrob(emoji, 
                               width = unit(1,"npc"), 
                               height = unit(1,"npc")),
                              -Inf, Inf, -Inf, 0.5) +
  scale_size(limits = c(0,1024))
  
size <- 0.5
ggplot() + 
  geom_line(mapping = aes(0:7,0), size = size) +
  geom_line(mapping = aes(0:7,1), size = size) + 
  geom_line(mapping = aes(0:7,2), size = size) + 
  geom_line(mapping = aes(0:7,3), size = size) + 
  geom_line(mapping = aes(0:7,4), size = size) +
  geom_line(mapping = aes(0,0:4), size = size) +
  geom_line(mapping = aes(1,0:4), size = size) +
  geom_line(mapping = aes(2,0:4), size = size) +
  geom_line(mapping = aes(3,0:4), size = size) +
  geom_line(mapping = aes(4,0:4), size = size) +
  geom_line(mapping = aes(5,0:4), size = size) +
  geom_line(mapping = aes(6,0:4), size = size) +
  geom_line(mapping = aes(7,0:4), size = size) +
  annotation_custom(rasterGrob(emoji),
                              0, 1, 0, 1) +
  annotation_custom(rasterGrob(emoji),
                              1, 2, 0, 1)

draw_lines <- function(plot, rows, cols, size = 1) {
  for (i in 0:rows) {
    plot <- plot + geom_line(mapping = aes_string(0:cols, i), size = size)
  }
  for (i in 0:cols) {
    plot <- plot + geom_line(mapping = aes_string(i, 0:rows), size = size)
  }
  
  plot
}
plot <- ggplot()
draw_lines(plot, 4, 7)

draw_emojis <- function(plot, data, rows, cols) {
  num_emojis <- rows * cols
  emojis <- matrix(data[1:num_emojis], rows, cols) 
  
  for (i in 1:rows) {
    for (j in 1:cols) {
      
    }
  }
}

