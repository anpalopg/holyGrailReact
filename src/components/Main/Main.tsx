import "./Main.css";

type MainProps = {
  varaside: string;
  vararticle: string;
  varmenu: string;
};

export default function Main({ varmenu, vararticle, varaside }: MainProps) {
  return (
    <>
      {/* Migas de pan */}
      <nav>
        <ul className="Migasdepan">
          <li><a href="/">/Home</a></li>
          <li><a href="/category">/Category</a></li>
        </ul>
      </nav>

      {/* Contenido principal */}
      <div className="MainContent">
        <section className="menu">
          <p>{varmenu}</p>
        </section>
        <section className="article">
          <p>{vararticle}</p>
        </section>
        <section className="aside">
          <p>{varaside}</p>
        </section>
      </div>

      {/* Tarjeta */}
      <div className="tarjeta">
        <figure>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAACtCAMAAAAu7/J6AAAA8FBMVEVhorRRma3////YzWnY2NhZnrG60tnMvjzQ0NBdoLPW1tZOmKxJl6/cz2bGvEGitotfnaF5qbeJtcKDnKREk6hvpbWkusA9kKa6wH1yq7tSnbHi7vH1+frTy2yuzdbC2eDM4OWWv8tOh5dZh5WYq7JYlqbw8fFIYWpNgI+wtWHp6end6u6CtMJemapJZ3FKb3zUyFqlx9Fsj5pqhI27xcmjsbbU3N9HWF9MeIZPjqCLr7nNysqsvcLB0th0orCGpa9CdIJCeot/k5vH0NR/lZ2xxctaeoWZsLhsi5VHUFaWso9wpJ6su4ONqn7RwDO7uVBWULA+AAAOa0lEQVR4nO2dCWObOBbHQRMxUZTpjgmuF9By+MCuwU5pnYM0bTqTNj1mdvb7f5t9TwIfOE7S1o7TRP+2NkYSSD/eexKyUQ2iJKLQ0lpUmAIXAXAMiShyPaq1JI/lAjAJhCRs09C6TozSiAi0JNGk267MwxXzLGlJLtt2TR60vAggBdqObhRjiSE0o1tEAyPUkG4Rcw1bR6TbpcO2lpaWlpaWltZ36cdGUa7rrqkeD1fYRkkpc7PmdamQTldjZDhZ9dhH9Bm00aJ4hwcbWa2xcicotVfe/DEbpz4ft1iME7vUYAxhIKN5TjQqZ8dLfIyp1PIV35CjbxrGjzrtQxa1gIDPDBriu1n6XhVmqE9IGGMWnJCiRhxjmiFfqBtnhuIYUoZe+Wgp0RTnvw3mormEPMUWG/gBUah4Qz1fQqK5gKwAM/YAjB0pP/VgZ+7l8CF+rJCYgd8UEBeaDSRyM0DfQ+uSU5kMApZwjVi+VvEJ+KGBCbkJmdAX0WfjxztnBRgiQTKXCLCMjEIUTk0EJxMlFx9w+BCS0LyiGI3Jc/HVQhuUcVtg8M8fLyOM21ZC4oigL0lH8828NKRp3BY5Y7jteyZ4W+QhFJujgTHkiN/tPeZJdPSsOCUp+BPiQe9LwJlEmSrjdu7LQCWtBUNYgBR9WTSlnuKYetttx0aFjc6w97JzSQI+i7jyHRm3M+rF2P+h9bjMw+DjhRKPDPKmik3iUQ+6Ify4wCflkUQDIwGRgpmoURHGbYNiNPcxWhHXtKu4De4lZLCWPzF43O7mlkbiciF7fYp9edVRyXiTB6qvR0uK5CDAbEo80rQkOwj7OIrYclM2JozbkWcIS1qEp4wHDElpNt5OIUWU25EpBwY0lmYGrupzw3/MIwAcZwd494q0fBl8xay9XhlvUhwmUnn/gp0hxm0hi6rABAOrQI7an4goD7Dp5aeq2VSNBwzbnVnLk0GCYmxug0U+mf9tBZOa5a3yM2Zc+/oklMn7/UcbXNYiFgsRuZrRzWKmqRFpaWlpaWlpaWlpaWlpaT1asVUPyz2dabRbxc4mu6A3b3ZnktuTM02pFDvfUdrd3an0Zk+9TzQlKfZpimbvzeI76LmmJDXZ2Vm0oDmL2tnddu0ehpp7c5AQ0Js5Rjt7TW1KRh3Szu6bhc97DQ3JWIK0s7ujIS1JQ7qDNKQ7SEO6g5q7i3qz+FFDQjV3926ShoSqu9uOdrdl1d1tV7vbsuru9ka727J073YHaUh3kIZ0B9Ugzc0laUhTNRdMZ3d3b2EaQE+VKC1Muu1WL9UO/dtAFGtMLacyotnU5J7+KkCJnZVM9mZsyq1dzagSa549B50/n5P8cKYD0pzYCm27XlpaWlpaWlpaD05zYyQ6u3uj8zdyy4MoNktfGGax6Y/Brh98zf1WbO53Y9NSK8Zs849zzpe6uY5rFDNsW53Bc4O8odaDp26eN8oqUDOz64WokVdZM1uqqaqdBfFIHsyVe+vFsrxacJ4287xcWJ1RO4jVkkzzB5vV0DOqPYzGwfQIdpAb0+eHM7u+YtY6hQ+6v5LHl0+8v+3hKeVyAR97MkPgk6S3WEYux6XScWUF1KcR8pYLD71j6rlx0LuFisvFm44lRPmwODmTa+3gE/RwCjZ7zv5iwURsOOonVYMMM/gjuelPj2DIBQ+Oi7WzmVY8JomCRNPJ1eeEXOB2combqonpkCSdxavEfHH1/lIWY2fdbvdAJFdM8p5cHVwODLl5dNDtLpRjGbk8PCfn8jKQ5OoqIQiMBqT7/kLtxoN1yfB0YXmwfJiQroREQ/H69JJMengTOuyeXpBEkcHlRY7bG4NkiOPL0pJ67RF/S7ojtWnm5EjWrOiIGiTWFMM/gO4BXkba6xU5+RMr65Lj9yNa4AEA0lXRGy0aUkQ+90Zi2JOmeN6mZ5IMGN3nkUku8Qh01Css8nrRcEftjyUko9fpsZHCwYqCOoJ05JFjciQ2Bwlq+OdxCQniY0OI1+qZdvSNg16JpG5J0NxPPEo61Wdyeaqq2i0yFWhoKi7y2oPizIfjmKmAsyGkghmSDIvJcc8uT4bmNhnUK2lVkOTaauRS4WA0J8cqLxm+3pwlQWUn79MSEkaa5PX0VEJcqd3LkIwexCnxuZi24YMMTwE5F2VUk8uiQeMXSolkgHyllxJxAVFliGczPxIhJqWLSbuq1XIOkrxAiidGuMvD0mw/v9sYJIiZyVWvgmQ0LocQV6d16ZYX7BpLysUkIZdVViHey/eAJN1XxzLsskb3tJPKcD5TArZXQgJXI+RcNcz1L4/J8F11RYan9WrOQwJzPVY8WXyZyM4Dr/SgsTlIsVpXSzzHxjBWgPd/rC7TZXltlyGBS5z/0X5LnquaN4mM1dLd2uaZjKsQXRiAmMz3OFS6my8+y26id9B5JR0HvPC0fUGGRXnoyVJj5yDRDCJ+dXGKdor9DC4Cha3wR6xeci1qTCaT84RMDrADdymMWJTDg1Ecn/ZKBwA36SxEF4gFBz3WKDtdYHOuGghXtJAv8KFJmZeXCVUxcBTTEEMZymAkaKq2uwICi+MTBTqY86xSzJxCAkbidVGOJ6lMGMGABVoxIcl5x9iIWK8o2seqO8nIx0aWkiOMpeg4n+IYL5kbxyK5WBgWwuUGr7RkVnmdj8ompOSsmZIPIzTR541YqFg1LQZY30FmeRWsoJGTBI2V+uICTj5UkABkPSTZNgwtznBJFVzJ6OhTnDexXxExnuE15B4VRQEx6Y96wTWKqpjEmscYa6WTZeXaSQOmljgl1XizKvIR11TcU3aP0UtVj70bQk7ZOTVwixwt9lNYDFxzZJSBffgaKbNGAgdL/izKyixBUiNMHC2YyXTkyuxk/gzM3eg4CRp0oBygd/Gp+0E2wbg4kML9TbW9GJV677pVVixfEaSji3K3PNjnQb1TfPfpoCzVuzg66BRVqaODq2KhMvNSFXiFEaGh6iVDP5Tqfm5Pz3Dxoe6maxWrAh6MC6uYOJKa214q0xstlQdNd7PZweaLzcaXkM5mpabb7JpCsgJstlkeY7RwBkqXCmppaWlpaWlp/YiKDrvqGJ3DkdHZ0K3Pzy92Mh71Tnqdzolx1d92ZR6qDgdj4/TEAFMyRhrSCvX7X0bGuDMCTtuHxFat7LDtX0+NDjv9/qh/Av++bCcoIRnzTnp662AwOe/2XXoirL4XzyKqbbdiY/pu81lB6tHZ1JoBTUE9GlIbAjQDte0G/rDYRgFNQf3EBnUvgH5mTvdjQjVQ2270N2kbhBSmn8WetkboZ+G0ZUClHjInRj3T9DxT/sG/3lL1PU8lTF+uzbUG3YhpW7ELTKgYD/pjftIvxma/+DIuvpwM6u33vvTbJ8XhYR8yDU5gu98+7J9uhNJNUXwrIV75WHE4GJvFSQGQxkW/XYy9k3rFvZOBOfjiHQKiwwH87Q/M8YYY3YTpFoYbADSNQkCl/cUrTtoIaYysroHUNk9PzMNxm4PZ9Xm/bZqn/Y1RWuV1NyauV/XbjeLwdAwmNObj/qA4GRfgS0vudjIejCFf4YHZtU/BPduHGzSlVSSmiZu892MrbseqWFwF7mtzYOo0r8q8WS071i3JG6LzwFXnsJS+NlDsgQyCvkuLFK7P8oOud2cD4vPvnK/IUSVwvirXBjRP4IZs3/7Vw7d6F8fBAA0c3sQPmbvUfk4Nbjqu60DW3GlmlHMj+9bmfq9mjb9DZvlFzXW81P96p77d+Z5acCpszrPcCYTLeWiFRo0Sd9PI4XEYxpzbcRZakWlEQXhPtjTzuXs637VyImi9YxnciVzHtlrOsiW5keP4LZ46jgURrpU2g7gVNe+LUoXpvk53jZw4z2OHh46JkILAClZAcrjvUAtcjqYcclr2vUEqfe7+TlcXN3w7skw3UJCswAS7quepILWyHIJTCGZ0z5CkMd3j6eoy4jgKeQDhGjwIzKqV5/XWO82oJd2tFYBTBkHLQXerh64Ni241JkGzYwe8jUUizcwoTFk9cMepCLmdphk4Jc9JFNk0De8tcFfaKiQUA0gmhT/QuZvLrZcpjDrolNjPQpZ7tiNz+5DmB0crG8/vlm1j2jakuw6g1z3O3r9BS6faOqStaP/3r/9aqa9/7deyP0lI+19/u1F/1yg9RUj8r99+uVG/fV2k9BQh7f99C6Rf/qMh7f/7VkiLsftGSNilcByfyBf454DU1A++T5MczjHFUX2Qs6G2rU1rhcTjjHMXxrfczh2TBqYZhGGEN05OnIYZdy1IalrMsWgcohwoYLLgoc9HrhWSE8XcCX0X7h6Iy6lPqR/bdhPIxH4WR05MMkwyWsJw7cDPbCfKHbhtfWqQHJ7GoeMEVupISEy6mxPCnaYDN1aWwyMfIDW5Y0ctjpCcJwjJDh3hOFYexSZCyuPYxAkMETZxxjAysyCVkOAu1AF4URznTw5SKwI4mWMFhu8hJCvIMYUzS1hObOW25frzkNIgsJ4SJOixICaJKPLDlhXA3xQgGWXnxh0m3Dg0opDPQ4ry1pNyN57RFsTiyOEeAUIQkmRMglgEaTlttXyA1PJzZxHS0wrcPBZ+CmGbm8DKshzoyzwqfN8PYDiUi1SELejgmhQtiQCk+GeCdD2aly+f/Yp69vKXO7sbhabTWW65VX53xE1XTSLe/9zOGrT/4uU1hH6d07NvGExes2vhy9SfVPsv/qlRKk3oeyA9Vu2/AA4vVxiRhqQkISEnqSVCGhKqgrRaGpKGdBfdAZKedNv/7z83M/rnhYZk9v53C6W/NCRz//cXz27Q/+rfKd3rI2YPR/u931drf+l7t+Wf4GnVZSz92kVrSUba2nYVHrp4ZhDtb7eodWyQ9MF/T7ZdOfbQEMTSDneDeHMIkIDS8k+DtUo5jaGElIi00fqZJ9E2Jc4d/nEoIRGRJMlx7horVm16umrab4dS/wd/EdM/ZUD/mwAAAABJRU5ErkJggg=="
            alt="Imagen de ejemplo"
          />
          <figcaption>Ejemplo de tarjeta</figcaption>
          <a href="/" className="button">Click on me</a>
        </figure>
      </div>
    </>
  );
}
