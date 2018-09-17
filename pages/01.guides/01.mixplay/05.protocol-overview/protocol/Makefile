RST_SRC = $(wildcard *.rst)
VERSION=1.6.0
RST_GEN = $(RST_SRC:.rst=.pdf)

all: $(RST_GEN)

%.pdf: %.rst
	pandoc -S -s -f rst -t latex -o $@ $^ --latex-engine=xelatex --toc --variable urlcolor=cyan --variable author='Document Version: ${VERSION}'

clean:
	rm -f $(RST_GEN)

.PHONY: all clean
